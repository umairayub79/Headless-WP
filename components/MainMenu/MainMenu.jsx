import { ButtonLink } from "components/ButtonLink";
import Link from "next/link";

export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}) => {
  return (
    <div className="bg-slate-800 flex items-center justify-between text-white px-5 h-16 sticky top-0 z-20">
      <div className="py-4 pl-5">
        <h1 className="text-2xl">Houses!</h1>
      </div>

      <div className="flex">
        {(items || []).map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-700 cursor-pointer relative group"
          >
            <div>
              <Link href={item.destination}>
                <a className="p-5 block">{item.label}</a>
              </Link>
            </div>
            {!!item.subMenuItems?.length && (
              <div className="hidden bg-slate-800 text-right absolute right-0 top-full group-hover:block -mt-1">
                {item.subMenuItems.map((subMenuItem) => (
                  <Link key={subMenuItem.id} href={subMenuItem.destination}>
                    <a className="block whitespace-nowrap p-5 hover:bg-slate-700">
                      {subMenuItem.label}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="ml-3 my-auto">
          <ButtonLink
            destination={callToActionDestination}
            label={callToActionLabel}
          />
        </div>
      </div>
    </div>
  );
};
