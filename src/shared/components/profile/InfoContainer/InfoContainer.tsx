import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {  getProfileFileName, updateImageProfile } from '@/service/profileService';
import { useAuthStore } from '@/store/useAuthStore';
import { PuffLoader } from 'react-spinners';
import { FaEdit } from 'react-icons/fa';
import { Dialog } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface InfoContainerProps {
    dataInfo: any;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ dataInfo }) => {
    const { token } = useAuthStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const queryClient = useQueryClient();
    const hasImage = dataInfo?.image?.filename;
    const {toast} = useToast()

    const { data, isLoading } = useQuery({
        queryKey: ['profile', token, hasImage],
        queryFn: () => (hasImage ? getProfileFileName(dataInfo.image.filename, token!) : null),
        enabled: !!hasImage,
    });

    const mutation = useMutation({
        mutationFn: (file: FormData) => updateImageProfile(file),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] });
            toast({
                title: "Success",
                description: "Profile image updated successfully",
                variant: "default",
            })
            setIsModalOpen(false);
            setSelectedFile(null);
        },
        onError: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] });
            toast({
                title: "Failed",
                description: "Profile image updated failed",
                variant: "destructive",
            })
            setIsModalOpen(false);
            setSelectedFile(null);
        },
    });

    const handleEditClick = () => setIsModalOpen(true);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleSubmit = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            mutation.mutate(formData);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles['img-wrapper']}>
                {isLoading ? (
                    <PuffLoader />
                ) : (
                    <img src={data || 'https://github.com/shadcn.png'} alt="Profile" />
                )}
            </div>
            <div className={styles['info-container']}>
                <div className={styles['row']}>
                    <div className={styles.label}>Name</div>
                    <div className={styles.info}>{dataInfo?.name}</div>
                </div>
                <div className={styles['row']}>
                    <div className={styles.label}>Email</div>
                    <div className={styles.info}>{dataInfo?.account?.email}</div>
                </div>
                <div className={styles['row-icon']} onClick={handleEditClick}>
                    <div className={styles.icon}>
                        <FaEdit size={20} />
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <div className="p-6 max-w-md mx-auto bg-white rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-center">Update Profile Image</h2>
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleFileChange}
                            className="w-full mb-4 p-2 border rounded-md"
                        />
                        <div className="flex justify-end gap-3">
                            <button 
                                onClick={handleSubmit} 
                                disabled={!selectedFile || mutation.isPending}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                            >
                                {mutation.isPending ? 'Updating...' : 'Update'}
                            </button>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </Dialog>
            )}
        </div>
    );
};

export default InfoContainer;
