import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTopTracks, TopTrack } from "@/service/dashboardService";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PuffLoader from "react-spinners/PuffLoader";

const ITEMS_PER_PAGE = 5;

const OverviewRankSong = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topTracks, setTopTracks] = useState<TopTrack[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTopTracks = async () => {
      setIsLoading(true);
      try {
        const data = await getTopTracks();
        setTopTracks(data);
      } catch (error) {
        console.error("Error fetching top tracks:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopTracks();
  }, []);

  const totalPages = Math.ceil(topTracks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTracks = topTracks.slice(startIndex, endIndex);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles["outer-container"]}>
      <div className={styles.container}>
        {isLoading ? (
          <div className="h-[400px] flex items-center justify-center">
            <PuffLoader color="#36d7b7" size={60} />
          </div>
        ) : topTracks.length === 0 ? (
          <div className="h-[400px] flex items-center justify-center text-gray-500">
            No tracks available
          </div>
        ) : (
          <>
            <Table>
              <TableHeader className="h-16 font-bold bg-slate-100">
                <TableRow>
                  <TableHead className="text-black w-[50px] font-bold">#</TableHead>
                  <TableHead className="text-black w-[250px] font-bold">Title</TableHead>
                  <TableHead className="text-black font-bold">Duration</TableHead>
                  <TableHead className="text-right text-black w-[100px] font-bold">Views</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentTracks.map((track, index) => (
                  <TableRow key={track._id} className="h-20">
                    <TableCell className="font-medium">{startIndex + index + 1}</TableCell>
                    <TableCell className="font-medium truncate max-w-[250px]">{track.title}</TableCell>
                    <TableCell>
                      {Math.floor(track.duration / 60)}:
                      {Math.floor(track.duration % 60).toString().padStart(2, '0')}
                    </TableCell>
                    <TableCell className="text-right">{track.totalViews.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    onClick={() => handlePagination(currentPage - 1)}
                  />
                </PaginationItem>
                <PaginationItem>
                  <span className={styles.pageNumber}>
                    Page {currentPage} of {totalPages}
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    onClick={() => handlePagination(currentPage + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        )}
      </div>
    </div>
  );
};

export default OverviewRankSong;
