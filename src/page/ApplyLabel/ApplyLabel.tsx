import LabelCard from "@/shared/components/labelCard/LabelCard";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApplyLabelData, ApplyLabelSchema } from "@/interface/ApplyLabel";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { getAllLabel } from "@/service/labelService";
import { useApplyLabel } from "@/service/mutations/applyLabelMutation";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

const ApplyLabel = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [labelName, setLabelName] = useState("");
  const [labelId, setLabelId] = useState<string>("");
  const { token } = useAuthStore();
  const applyLabelMutation = useApplyLabel();
  const { toast } = useToast();
  const {
    data: labelData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["labelCard", token],
    queryFn: () => getAllLabel(token!),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ApplyLabelData>({
    resolver: yupResolver(ApplyLabelSchema),
  });

  useEffect(() => {
    if (labelId) {
      setValue("labelId", labelId);
    }
  }, [labelId, setValue]);

  const onSubmit: SubmitHandler<ApplyLabelData> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("labelId", data.labelId);
      if (data.file && data.file[0]) {
        formData.append("file", data.file[0]); // Append the first file from FileList
      }

      applyLabelMutation.mutate(formData, {
        onSuccess: () => {
          toast({
            variant: "default",
            duration: 3000,
            title: "Apply Labels Successfully",
            className: styles["toast-success"],
          });

          setShowForm(false);
        },

        onError: () => {
          toast({
            variant: "destructive",
            duration: 3000,
            title: "Apply Labels Failed",
            description: "Please make sure you put correct PDF File"
          });
        },
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        duration: 3000,
        title: "Apply Labels Failed"
      });
    }
  };

  const handleOpenForm = (name: string, labelId: string) => {
    setLoading(true); // Show spinner
    setLabelName(name); // Set the label name dynamically
    setLabelId(labelId);
    setTimeout(() => {
      setLoading(false); // Hide spinner
      setShowForm(true); // Show form
    }, 1000); // Simulate a 2-second delay
  };

  return (
    <div className={styles["outer-container"]}>
      <div className={styles.container}>
        <div className={styles.title}>List of Label</div>
        {isLoading ? (
          <PuffLoader />
        ) : (
          <div className={styles.list}>
            {labelData.map((label: any, index: any) => {
              return (
                <LabelCard
                  key={index}
                  labelName={label.displayName}
                  onClick={() => handleOpenForm(label.name, label._id)}
                />
              );
            })}
          </div>
        )}
      </div>

      {showForm && (
        <div className={styles["form-container"]}>
          {loading && (
            <div className={styles.loading}>
              <PuffLoader />
            </div>
          )}
          {!loading && showForm && (
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles["form-wrapper"]}>
                <div className={styles.title}>{labelName}</div>
                <div className={styles.desc}>
                  Fill your information for apply
                </div>

                <Label htmlFor="labelId">Label Id</Label>
                <Input
                  className="h-12 p-3 my-2"
                  id="labelId"
                  {...register("labelId")}
                  type="text"
                  value={labelId}
                  disabled={true}
                />
                <Label htmlFor="file" className="mt-4">File Resume (Only PDF)</Label>
             
                <Input
                  className="h-12 p-3 my-2"
                  id="file"
                  {...register("file")}
                  type="file"
                />
                {errors.file && <p className="text-red-500">{String(errors.file.message)}</p>}
              </div>

              <div className={styles["action-btn"]}>
                <Button type="submit" className="w-full mt-4 h-14">
                  Submit
                </Button>
                <Button
                  variant="outline"
                  className="w-full mt-4 h-14"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ApplyLabel;
