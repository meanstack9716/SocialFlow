import Image from "next/image";

export default function ActionShareIcons({ imageUrlForShare }) {
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
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${imageUrlForShare}&t=TITLE`}
        onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
        target="_blank"
        title="Share on Facebook"
        rel="noopener"
      >
        <Image
          className="cursor-pointer"
          src={"/icons/fb.png"}
          alt="fb"
          width={34}
          height={34}
        ></Image>
      </a>
      <a
        href={`https://twitter.com/share?url=${imageUrlForShare}&via=TWITTER_HANDLE&text=TEXT`}
        onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
        target="_blank"
        title="Share on Twitter"
        rel="noopener"
      >
        <Image
          className="cursor-pointer"
          src={"/icons/twitter.png"}
          alt="twitter"
          width={34}
          height={34}
        ></Image>
      </a>
      <Image
        className="cursor-pointer"
        src={"/icons/insta.png"}
        alt="insta"
        width={34}
        height={34}
      ></Image>
      <a
        href={`http://pinterest.com/pin/create/button/?url=${imageUrlForShare}&media=${imageUrlForShare}&description=description`}
        target="_blank"
        rel="noopener"
      >
        <Image
          className="cursor-pointer"
          src={"/icons/pintrest.png"}
          alt="pintrest"
          width={34}
          height={34}
        ></Image>
      </a>
    </div>
  );
}
