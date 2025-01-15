import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { getQueuedTracks, Track } from "@/service/managerService";
import { PuffLoader } from "react-spinners";

const QueuedTracks = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchTracks = async () => {
      setIsLoading(true);
      try {
        const data = await getQueuedTracks();
        setTracks(data);
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
        toast({
          variant: "destructive",
          title: "Failed to fetch tracks",
          description: "Please try again later",
          className: "bg-red-500 text-white",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTracks();
  }, []);

  return (
    <div className="h-[500px] overflow-auto scrollbar-hide relative">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <PuffLoader color="#36d7b7" size={60} />
        </div>
      ) : (
        <Table>
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Artist</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tracks.map((track) => (
              <TableRow key={track._id}>
                <TableCell className="font-medium">{track.title}</TableCell>
                <TableCell>{track.displayedArtist}</TableCell>
                <TableCell>
                  {Math.floor(track.duration / 60)}:
                  {Math.floor(track.duration % 60).toString().padStart(2, '0')}
                </TableCell>
                <TableCell className="capitalize text-yellow-500">{track.available}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default QueuedTracks;
