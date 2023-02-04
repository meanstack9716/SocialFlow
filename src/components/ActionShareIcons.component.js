import Image from "next/image";

export default function ActionShareIcons() {
  return (
    <div className={`col-12 mt-2 d-flex justify-content-between`}>
      <Image
        className="cursor-pointer"
        src={"/icons/like.png"}
        alt="like"
        width={34}
        height={34}
      ></Image>
      <Image
        className="cursor-pointer"
        src={"/icons/dislike.png"}
        alt="dislike"
        width={34}
        height={34}
      ></Image>
      <Image
        className="cursor-pointer"
        src={"/icons/download.png"}
        alt="download"
        width={34}
        height={34}
      ></Image>
      <Image
        className="cursor-pointer"
        src={"/icons/fb.png"}
        alt="fb"
        width={34}
        height={34}
      ></Image>
      <Image
        className="cursor-pointer"
        src={"/icons/twitter.png"}
        alt="twitter"
        width={34}
        height={34}
      ></Image>
      <Image
        className="cursor-pointer"
        src={"/icons/insta.png"}
        alt="insta"
        width={34}
        height={34}
      ></Image>
      <Image
        className="cursor-pointer"
        src={"/icons/pintrest.png"}
        alt="pintrest"
        width={34}
        height={34}
      ></Image>
    </div>
  );
}
