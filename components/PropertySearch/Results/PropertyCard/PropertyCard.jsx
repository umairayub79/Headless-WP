import { faBathtub, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";

export const PropertyCard = ({
  title,
  destination,
  image,
  bedrooms,
  bathrooms,
  hasParking,
  petFriendly,
  price,
}) => {
  return (
    <Link href={destination}>
      <a className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
        <div className="fllex w-full">
          <Image
          unoptimized
            src={image}
            width="300px"
            height="200px"
            alt={title}
            objectFit="cover"
          />
        </div>
        <div className="mt-3 text-lg font-bold">{title}</div>
        <div className="text-lg">{numeral(price).format("0,0")}</div>
        <div className="flex justify-between text-sm mt-3">
          <div>
            <FontAwesomeIcon icon={faBathtub} />
            <span className="pl-2">{bathrooms} bathrooms</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBed} />
            <span className="pl-2">{bedrooms} bedrooms</span>
          </div>
        </div>
        {(!!hasParking || !!petFriendly) && (
          <div className="flex justify-between text-sm mt-3">
            <div>
              {!!hasParking && (
                <>
                  <FontAwesomeIcon icon={faCar} /> parking available
                </>
              )}
            </div>
            <div>
              {!!petFriendly && (
                <>
                  <FontAwesomeIcon icon={faDog} /> pet friendly
                </>
              )}
            </div>
          </div>
        )}
      </a>
    </Link>
  );
};
