import { BlockRenderer } from "components/BlocksRenderer";
import { MainMenu } from "components/MainMenu";
import { PageWrapper } from "context/page";

export const Page = (props) => {
  console.log("featuredImage", props.featuredImage)
  return (
    <PageWrapper value={{ featuredImage: props.featuredImage }}>
      <MainMenu
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination}
      />
      <BlockRenderer blocks={props.blocks} />
    </PageWrapper>
  );
};
