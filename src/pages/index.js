import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header.component";
import ActionShareIcons from "@/components/ActionShareIcons.component";
import { useRef, useState } from "react";
import FBEnlarge from "@/components/FBEnlarge.component";
import InstaEnlarge from "@/components/InstaEnlarge.component";
import PintrestEnlarge from "@/components/PintrestEnlarge.component";
import TwitterEnlarge from "@/components/TwitterEnlarge.component";
const icons = [
  {
    name: "fa-facebook",
    key: "facebook",
  },
  {
    name: "fa-square-twitter",
    key: "twitter",
  },
  {
    name: "fa-instagram",
    key: "instagram",
  },
  {
    name: "fa-pinterest",
    key: "pinterest",
  },
];

export default function Home() {
  const [isImageEnlargeViewMode, setIsImageEnlargeViewMode] = useState(false);
  const [imageEnlargeViewOption, setImageEnlargeViewOption] =
    useState("instagram");
  const inputFileRef = useRef(null);

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const onFileChange = (e) => {
    e.preventDefault();
    /*Selected files data can be collected here.*/
    console.log(e.target.files);

    if (e.dataTransfer && e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(file);
        }
      });
    } else if (e.dataTransfer && e.dataTransfer.files) {
      // Use DataTransfer interface to access the file(s)
      [...e.dataTransfer.files].forEach((file, i) => {
        console.log(file);
      });
    }
  };

  return (
    <>
      <Head>
        <title>Image App</title>
        <meta name="description" content="Image App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.subHeaderContainer}>
              <p className={styles.subHeaderTitle}>
                Re-create your product images in seconds using #socialflow.ai
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-5">
            <div
              className={styles.imageDragDropContainer}
              onDrop={onFileChange}
              onDragOver={dragOverHandler}
            >
              <p
                onClick={() => inputFileRef.current.click()}
                className="cursor-pointer"
              >
                Drag and Drop your Image Here.. <br />
                or <br />
                Click here to Upload
              </p>
              <input
                type="file"
                onChange={onFileChange}
                ref={inputFileRef}
                name="files"
                id="file"
                className="d-none"
                accept="image/*"
              />
            </div>
            <p className="text-center mt-2 pl-4 pr-4">
              Tell us How to do you want to re-create your product{" "}
            </p>
            <textarea className={styles.textarea} rows="3"></textarea>
            <ol>
              <li className={`${styles.list} text-gray`}>
                My sofa is placed in the forests
              </li>
              <li className={`${styles.list} text-gray`}>
                My dinning table in a seashore
              </li>
            </ol>
            <div className="ml-1">
              <button className={`${styles.generateImgBtn}`}>
                Generate Image
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-5 mb-3">
            <div className="row">
              <div className="col-8">
                {!isImageEnlargeViewMode && (
                  <p className="text-gray">Click on images to enlarge</p>
                )}
                {isImageEnlargeViewMode && (
                  <Image
                    onClick={() =>
                      setIsImageEnlargeViewMode(!isImageEnlargeViewMode)
                    }
                    src={"/icons/backIcon.png"}
                    className="cursor-pointer"
                    alt="like"
                    width={24}
                    height={24}
                  ></Image>
                )}
              </div>
              {isImageEnlargeViewMode && (
                <div className="col-4 d-flex justify-content-between mb-3">
                  {icons.map((icon) => (
                    <div
                      className="cursor-pointer"
                      key={icon.key}
                      onClick={() => setImageEnlargeViewOption(icon.key)}
                    >
                      <i
                        className={`fa-brands fa-2xl ${icon.name} ${
                          imageEnlargeViewOption === icon.key
                            ? styles.active
                            : ""
                        }`}
                      ></i>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {!isImageEnlargeViewMode ? (
              <div className="row">
                {[1, 2, 3, 4].map((i) => (
                  <div className={`col-6 col-sm-12 col-md-6 mb-3`} key={i}>
                    <div
                      className={`${styles.imageHolderContainer} cursor-pointer`}
                      onClick={() =>
                        setIsImageEnlargeViewMode(!isImageEnlargeViewMode)
                      }
                    >
                      <img
                        src="https://images.unsplash.com/photo-1618588507085-c79565432917"
                        alt="image"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row">
                <div className={`col-12 mb-3`}>
                  {imageEnlargeViewOption === 'facebook' && <FBEnlarge/>}
                  {imageEnlargeViewOption === 'instagram' && <InstaEnlarge/>}
                  {imageEnlargeViewOption === 'pinterest' && <PintrestEnlarge />}
                  {imageEnlargeViewOption === 'twitter' && <TwitterEnlarge />}
                </div>
              </div>
            )}
            <ActionShareIcons></ActionShareIcons>
          </div>
        </div>
      </div>
    </>
  );
}
