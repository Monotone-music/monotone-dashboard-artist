import LabelCard from "@/shared/components/labelCard/LabelCard";
import styles from "./styles.module.scss";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApplyLabelData, ApplyLabelSchema } from "@/interface/ApplyLabel";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthInput from "@/shared/components/authInput/AuthInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import mockDataLabel from "../../data/mockLabelData";

const ApplyLabel = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [labelName, setLabelName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyLabelData>({ resolver: yupResolver(ApplyLabelSchema) });

  const onSubmit: SubmitHandler<ApplyLabelData> = (data) => {
    console.log(data);
  };

  const handleOpenForm = (name: string) => {
    setLoading(true); // Show spinner
    setLabelName(name); // Set the label name dynamically
    setTimeout(() => {
      setLoading(false); // Hide spinner
      setShowForm(true); // Show form
    }, 1000); // Simulate a 2-second delay
  };

  return (
    <div className={styles["outer-container"]}>
      <div className={styles.container}>
        <div className={styles.title}>List of Label</div>
        <div className={styles.list}>
          {mockDataLabel.map((label, index) => (
            <LabelCard key={index} labelName={label.name} onClick={() => handleOpenForm(label.name)} />
          ))}
        </div>
      </div>

      {showForm && (
        <div className={styles["form-container"]}>
          {loading && (
            <div className={styles.loading}>
              <PuffLoader />
            </div>
          )}
          {!loading && showForm && (
            <form
              action=""
              className={styles.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles["form-wrapper"]}>
                <div className={styles.title}>{labelName}</div>
                <div className={styles.desc}>
                  Fill your information for apply
                </div>
                <AuthInput
                  showLabel={false}
                  type="email"
                  id="email"
                  label="Email"
                  placeholder="Enter your email"
                  register={register}
                  error={errors?.email?.message}
                />
                <Input
                  className="h-12 p-3"
                  id="resume"
                  {...register("resume")}
                  type="file"
                />
              </div>
              <div className={styles["action-btn"]}>
                <Button type="submit" className="w-full mt-4 h-14">
                  Submit
                </Button>

                <Button
                  type="submit"
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
