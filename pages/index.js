import { BlockRenderer } from "components";
import { MainMenu } from "components/MainMenu";
import { getPageStaticProps } from "utils/getPageStaticProps";

export default function Home(props) {
  return (
    <div>
      <MainMenu
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination}
      />
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
}

export const getStaticProps = getPageStaticProps
