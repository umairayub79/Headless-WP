import { usePageContext } from "context/page";
import Image from "next/image";

export const Cover = ({ children, background }) => {
  const { featuredImage } = usePageContext();
  return (
    <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
      {(!!background || !!featuredImage) && (
        <Image
          unoptimized
          alt="cover"
          src={background || featuredImage}
          layout="fill"
          objectFit="cover"
          className="mix-blend-soft-light"
        />
      )}
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};
