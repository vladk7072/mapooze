import { Skeleton } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
//@ts-ignore
import mainImg from "../../../assets/images/account/bids/main-img.jpg";
import { isVisibleSkeleton } from "../Auction/Auction";

interface IProps {
  isVisibleSkeleton: isVisibleSkeleton;
  setIsVisibleSkeleton: (args: SetStateAction<isVisibleSkeleton>) => void;
}

export const AuctionAbout: FC<IProps> = ({
  isVisibleSkeleton,
  setIsVisibleSkeleton,
}) => {
  return (
    <div className="auction__about">
      {isVisibleSkeleton.main ? (
        <Skeleton
          sx={{
            bgcolor: "rgba(41, 171, 226, 0.5)",
            borderRadius: "10px",
          }}
          variant="rectangular"
          width="100%"
          height={223}
        />
      ) : (
        <div
          className="auction__about-picture"
          style={
            isVisibleSkeleton.photo
              ? {
                  backgroundColor: "rgba(41, 171, 226, 0.3)",
                }
              : {}
          }
        >
          <img
            src={mainImg}
            onLoad={() =>
              setIsVisibleSkeleton((prev) => ({ ...prev, photo: false }))
            }
            alt=""
          />
        </div>
      )}
      {isVisibleSkeleton.main ? (
        <Skeleton
          sx={{
            bgcolor: "rgba(41, 171, 226, 0.5)",
            borderRadius: "5px",
          }}
          variant="rectangular"
          width="100%"
          height={121}
        />
      ) : (
        <div className="auction__about-text">
          Sweden is a country located in Northern Europe, bordered by Norway to
          the west and Finland to the east. Its capital city is Stockholm, which
          is also the largest urban area in the country. Sweden is known for
          several things, including its beautiful natural landscapes, high
          standard of living, and innovative technology. The country has a
          population of approximately 10.3 million people, with Swedish being
          the official language. English is widely spoken and understood
          throughout the country, making it easy for tourists and visitors to
          communicate with locals. Sweden is renowned for its stunning natural
          beauty, with vast forests, lakes, and mountains dotting the landscape.
          The country experiences a temperate climate, with temperatures ranging
          from -22°C to 32°C. The summer months, from June to August, are the
          warmest and most pleasant. Sweden is known for its strong economy,
          which is heavily reliant on exports, particularly in the areas of
          machinery, vehicles, and electronics. The country is also home to
          several global companies, including IKEA, H&M, and Ericsson. Culture
          is another important aspect of Swedish life. The country is famous for
          its contributions to music, art, and literature. Sweden is also home
          to several UNESCO World Heritage Sites, including the Drottningholm
          Palace, the Skogskyrkogården cemetery, and the High Coast. Swedish
          cuisine is diverse, with a focus on fresh, locally-sourced
          ingredients. Some of the most popular dishes include meatballs,
          herring, and lingonberry jam. Sweden is also famous for its fika
          culture, which is the tradition of taking a coffee break with pastries
          or cookies. Sweden is known for its progressive policies, including a
          robust welfare state, generous parental leave, and universal
          healthcare. The country is also committed to sustainability and
          environmental protection, with a goal of becoming carbon neutral by
          2045. In terms of sports, Sweden is famous for its love of ice hockey,
          with the national team winning several world championships and Olympic
          gold medals. The country also has a strong tradition in football, with
          several popular teams such as AIK, Djurgårdens IF, and Malmö FF.
          Overall, Sweden is a beautiful, innovative, and prosperous country
          that offers visitors a unique blend of natural beauty, culture, and
          modernity.
        </div>
      )}
    </div>
  );
};
