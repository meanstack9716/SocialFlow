import Image from "next/image";
import { firestore } from "@/config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import styles from "@/styles/Home.module.css";

export default function ActionShareIcons({ imageUrlForShare }) {
  const likeDislikeCollection = collection(firestore,'likeDislike');
  const likeDislike = async (flag) => {
    // get the current timestamp
   const timestamp  = Date.now().toString();
   // create a pointer to our Document
   const _data = doc(firestore, `likeDislike/${timestamp}`);
   // structure the todo data
   const likeDislikeData = {
     image: imageUrlForShare,
     like: flag
   };
   try {
     //add the Document
     await setDoc(_data, likeDislikeData);
     if(flag) {
       alert('thanks for like')
     } else {
      alert('your information saved, will improve')
     }
   } catch (error) {
     console.log("An error occurred", error);
   }
  };
  return (
    <div className={`${styles.shareIconsWrap} col-12 mt-2 d-flex justify-content-around `}>
      <div><b>Share on:</b></div>
      <div className={`${styles.shareIconsText} d-flex flex-column`}>
       <Image
        className="cursor-pointer"
        src={"/icons/like.png"}
        alt="like"
        width={25}
        height={25}
        onClick={() => likeDislike(true)}
       ></Image>
      </div>
      <div className={`${styles.shareIconsText} d-flex flex-column`}>
       <Image
        className="cursor-pointer"
        src={"/icons/dislike.png"}
        alt="dislike"
        width={25}
        height={25}
        onClick={() => likeDislike(false)}
       ></Image>
      </div>
      <div className={`${styles.shareIconsText} d-flex flex-column`}>
        <a download={imageUrlForShare} href={imageUrlForShare} title="ImageName">
          <Image
           className="cursor-pointer"
           src={"/icons/download.png"}
           alt="download"
           width={25}
           height={25}
          ></Image>
        </a>
      </div>
      <div className={`${styles.shareIconsText} d-flex flex-column`}>
       <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${imageUrlForShare}&t=TITLE`}
        onClick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
        target="_blank"
        title="Share on Facebook"
        rel="noopener noreferrer"
       >
        <Image
          className="cursor-pointer"
          src={"/icons/fb.png"}
          alt="fb"
          width={25}
          height={25}
        ></Image>
       </a>
      </div>
      <div className={`${styles.shareIconsText} d-flex flex-column`}>
       <a
        href={`https://twitter.com/share?url=${imageUrlForShare}&via=TWITTER_HANDLE&text=TEXT`}
        onClick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
        target="_blank"
        title="Share on Twitter"
        rel="noopener noreferrer"
       >
        <Image
          className="cursor-pointer"
          src={"/icons/twitter.png"}
          alt="twitter"
          width={25}
          height={25}
        ></Image>
       </a>
      </div>
      <div className={`${styles.shareIconsText} d-flex flex-column`}>
       <Image
        className="cursor-pointer"
        src={"/icons/insta.png"}
        alt="insta"
        width={25}
        height={25}
       ></Image>
      </div>
      <div className={`${styles.shareIconsText} d-flex flex-column `}>
       <a
        href={`http://pinterest.com/pin/create/button/?url=${imageUrlForShare}&media=${imageUrlForShare}&description=description`}
        target="_blank"
        rel="noopener noreferrer"
       >
        <Image
          className="cursor-pointer"
          src={"/icons/pintrest.png"}
          alt="pintrest"
          width={25}
          height={25}
        ></Image>
       </a>
      </div>
    </div>
  );
}
