import { useState } from "react";
import styles from "./styles.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import AuthInput from "../authInput/AuthInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApplyLabelData, ApplyLabelSchema } from "@/interface/ApplyLabel";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import useMediaQuery from "@/util/useMediaQuery";

interface LabelCardProps {
  onClick: () => void;
  labelName: string;
}
const LabelCard: React.FC<LabelCardProps> = ({ onClick, labelName }) => {
  const [isHover, setIsHover] = useState(false);
  const isMobile = useMediaQuery("(max-width: 766px)");
  const {
    register,
    handleSubmit
  } = useForm<ApplyLabelData>({ resolver: yupResolver(ApplyLabelSchema) });

  const onSubmit: SubmitHandler<ApplyLabelData> = (data) => {
    console.log(data);
  };

  return (
    <>
      {isMobile ? (
        <Drawer>
          <DrawerTrigger asChild>
            <div
              className={styles.container}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div className={styles.title}>{labelName}</div>

              <div className={styles["discover-action"]}>
                {isHover && (
                  <>
                    <div className={styles.text}>Apply now</div>
                    <FaArrowRight size={14} />
                  </>
                )}
              </div>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto h-96 w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Apply Label Form</DrawerTitle>
                <DrawerDescription>
                  Fill your infomation to apply
                </DrawerDescription>
              </DrawerHeader>

              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex-1 text-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <AuthInput
                        showLabel={false}
                        type="email"
                        id="email"
                        label="Email"
                        placeholder="Enter your email"
                        register={register}
                        // error={errors?.email?.message}
                      />

                      <Input id="resume" {...register("file")} type="file" />

                      <Button type="submit" className="w-full mt-4">
                        Submit
                      </Button>

                      <DrawerClose asChild>
                        <Button variant="outline" className="w-full mt-2">
                          Cancel
                        </Button>
                      </DrawerClose>
                    </form>
                  </div>
                </div>
              </div>
              <DrawerFooter></DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <div
          className={styles.container}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={onClick}
        >
          <div className={styles.title}>{labelName}</div>

          <div className={styles["discover-action"]}>
            {isHover && (
              <>
                <div className={styles.text}>Apply now</div>
                <FaArrowRight size={14} />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LabelCard;
