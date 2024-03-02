import { BlockRenderer } from "components/BlocksRenderer";
import { MainMenu } from "components/MainMenu";
import { PageWrapper } from "context/page";

export const Page = (props) => {
  return (
    <PageWrapper
      value={{ featuredImage: props.featuredImage, title: props.title }}
    >
      <MainMenu
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination}
      />
      <BlockRenderer blocks={props.blocks} />
    </PageWrapper>
  );
};
