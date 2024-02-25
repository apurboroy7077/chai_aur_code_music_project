import { layoutPropsType } from "@/types/myTypes";

const layout = (props: layoutPropsType) => {
  let { children } = props;
  return (
    <>
      <h2>This is Chai Page Layout</h2>
      {children}
    </>
  );
};

export default layout;
