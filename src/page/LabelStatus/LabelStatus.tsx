import styles from "./styles.module.scss";
import TableData from "@/shared/components/applicationStatus/page";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useLabelRequests } from "@/hooks/useLabelRequests";

const LabelStatus = () => {
  const pendingRequests = useLabelRequests('pending');
  const noticedRequests = useLabelRequests('noticed');
  const approvedRequests = useLabelRequests('approved');
  const rejectedRequests = useLabelRequests('rejected');

  return (
<div className={styles.container}>
      <div className={styles.title}>Application Status</div>
      <div className={styles['table-wrapper']}>
        <Tabs defaultValue="pending" className="w-[100%] mt-10">
          <TabsList className="grid grid-cols-4 my-10 w-[500px]" >
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="noticed">Noticed</TabsTrigger>
            <TabsTrigger value="approve">Approve</TabsTrigger>
            <TabsTrigger value="reject">Reject</TabsTrigger>
          </TabsList>
          <TabsContent value="pending">
            <TableData 
              data={pendingRequests.data} 
              isLoading={pendingRequests.isLoading} 
            />
          </TabsContent>
          <TabsContent value="noticed">
            <TableData 
              data={noticedRequests.data} 
              isLoading={noticedRequests.isLoading} 
            />
          </TabsContent>
          <TabsContent value="approve">
            <TableData 
              data={approvedRequests.data} 
              isLoading={approvedRequests.isLoading}
            />
          </TabsContent>
          <TabsContent value="reject">
            <TableData 
              data={rejectedRequests.data}
              isLoading={rejectedRequests.isLoading}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LabelStatus;
