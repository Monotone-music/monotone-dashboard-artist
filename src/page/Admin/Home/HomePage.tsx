import styles from "./styles.module.scss";
import TitlePage from "@/shared/components/titlePage/TitlePage";
import AnalyticCard from "@/shared/components/analyticCard/AnalyticCard";
import { IoEye } from "react-icons/io5";
import { FaDollarSign, FaMusic, FaRegUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { DashboardStats, getArtistAnalytics } from "@/service/dashboardService";
import PuffLoader from "react-spinners/PuffLoader";
import { OverviewChart } from "@/shared/components/overviewChart/OverviewChart";
import OverviewRankSong from "@/shared/components/overviewRankSong/OverviewRankSong";
const HomePage = () => {
  const [data, setData] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getArtistAnalytics();
        setData(response);
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <TitlePage title={["Overview", "Dashboard"]} />
      <section className={styles["analytic-section"]}>
        {isLoading ? (
          Array(3)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md">
                <PuffLoader size={40} />
              </div>
            ))
        ) : (
          <>
            <AnalyticCard
              iconColor="#4CAF50"
              icon={FaMusic}
              title="Total Recordings"
              mainNumber={data?.totalRecordings || 0}
              unit="Track(s)"
            />
            <AnalyticCard
              iconColor="#2196F3"
              icon={IoEye}
              title="Total Views"
              mainNumber={data?.totalViews || 0}
              unit="View(s)"
            />
            <AnalyticCard
              iconColor="#673AB7"
              icon={FaDollarSign}
              title="Estimated Earnings"
              mainNumber={data?.estimatedEarnings?.toFixed(2) || 0}
              unit=""
            />
            <AnalyticCard
              iconColor="#FFC107"
              icon={FaRegUser}
              title="Label"
              mainNumber={
                data?.label === "defaultlabel"
                  ? "No Label"
                  : data?.label || "N/A"
              }
              unit=""
            />
          </>
        )}
      </section>

      <section className={styles["metrics-section"]}>
        <div className={styles["chart-section"]}>
          <TitlePage title={["Total Streams per Month"]} />
          <OverviewChart />
        </div>

        <div className={styles["top-section"]}>
          <TitlePage title={["Top Songs"]} />
          <OverviewRankSong />
        </div>
      </section>
    </div>
  );
};
export default HomePage;
