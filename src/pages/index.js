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
import axios from "axios";
import SkeltonLoaderCard from "@/components/SkeltonLoaderCard.component";
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
  const [imageForEnlargeViewMode, setImageForEnlargeViewMode] = useState(null);
  const [imageEnlargeViewOption, setImageEnlargeViewOption] =
    useState("instagram");
  const inputFileRef = useRef(null);
  const [image, setImage] = useState(null);
  const [imageForView, setImageForView] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [negative_prompt, setNegative_prompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageResponse, setImageResponse] = useState(null);

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const onFileChange = (e) => {
    e.preventDefault();
    if (e.target.files) {
      setImage(e.target.files[0]);
      setImageForView(URL.createObjectURL(e.target.files[0]));
    } else if (e.dataTransfer && e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          setImage(file);
          setImageForView(URL.createObjectURL(file));
        }
      });
    } else if (e.dataTransfer && e.dataTransfer.files) {
      // Use DataTransfer interface to access the file(s)
      [...e.dataTransfer.files].forEach((file, i) => {
        setImage(file);
        setImageForView(URL.createObjectURL(file));
      });
    }
  };

  const generateImage = async () => {
    const data = new FormData();
    if (image && image.name && prompt) {
      setLoading(true);
      data.append("image", image, image.name);
      data.append("negative_prompt", negative_prompt);
      data.append("prompt", prompt);
      const response = await axios.post(
        "https://socialflow-ai-hvrhzwzgoa-uc.a.run.app/predict-image",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      if (response && response.data && response.data.data) {
        setImageResponse(response.data.data);
      }
      console.log("response", response);
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
      <div className="container mb-2">
        <div className="row">
          <div className="col-12">
            <div className={styles.subHeaderContainer}>
              <p className={styles.subHeaderTitle}>
                Re-create your product images in seconds using #socialflow.ai
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-5">
            {imageForView ? (
              <div className="position-relative rounded-5">
                <img
                  src={imageForView}
                  className="img img-responsive rounded-5"
                  alt="image"
                />
                <div
                  className="cursor-pointer position-absolute top-0 end-0"
                  onClick={() => {
                    setImageForView(null);
                    setImage(null);
                  }}
                >
                  <i className="fa-solid fa-2xl fa-circle-xmark"></i>
                </div>
              </div>
            ) : (
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
            )}
            <div className="text-center mt-3 pl-4 pr-4 mb-0 d-flex">
             <p>Describe What you want to see:</p>
             <a href="#" className="ms-2" title="Good description for your image">
             <i class="fa-sharp fa-solid fa-info"></i>
             </a>
            </div>
            <textarea
              className={styles.textarea}
              onChange={(e) => setPrompt(e.target.value)}
              rows="3"
            ></textarea>
              <p className="text-center mt-2 pl-4 pr-4 mb-0">What you dont want</p>
            <input
              className={`${styles.textarea} mb-2`}
              onChange={(e) => setNegative_prompt(e.target.value)}
            />
            {/* <ol>
              <li className={`${styles.list} text-gray`}>
                My sofa is placed in the forests
              </li>
              <li className={`${styles.list} text-gray`}>
                My dinning table in a seashore
              </li>
            </ol> */}
            <div className={`${styles.generateImgBtnWrap}`}>
              <button
                className={`${styles.generateImgBtn}`}
                onClick={() => generateImage()}
                disabled={loading || !image || !prompt}
              >
                {loading ? (
                  <i className="fa fa-spin fa-spinner"></i>
                ) : (
                  "Generate"
                )}
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-5 mb-3">
            <div className="row">
              <div className="col-8">
                {!imageForEnlargeViewMode && imageResponse &&
                  imageResponse.generated_images &&
                  imageResponse.generated_images.length && (
                  <p className="text-gray">Click on images to enlarge</p>
                )}
                {imageForEnlargeViewMode && (
                  <div className="d-flex">
                  <Image
                    onClick={() => setImageForEnlargeViewMode(null)}
                    src={"/icons/backIcon.png"}
                    className="cursor-pointer"
                    alt="like"
                    width={24}
                    height={24}
                  ></Image>
                  <h5 className={styles.postHeadTitle}>See as Post on:</h5>
                  </div>
                  
                )}
              </div>
              {imageForEnlargeViewMode && (
                <div className="col-4 d-flex justify-content-between mb-3">
                  {icons.map((icon) => (
                    <div
                      className="cursor-pointer ms-1"
                      key={icon.key}
                      onClick={() => setImageEnlargeViewOption(icon.key)}
                    >
                      <i
                        className={`fa-brands fa-xl ${icon.name} ${imageEnlargeViewOption === icon.key
                          ? styles.active
                          : ""
                          }`}
                      ></i>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {!imageForEnlargeViewMode ? (
              <div className="row">
                {loading && [1, 2, 3, 4].map((i) => (
                  <div className={`col-6 col-sm-12 col-md-6 mb-3`} key={i}>
                    <div className={`${styles.imageHolderContainer}`}>
                      <SkeltonLoaderCard />
                    </div>
                  </div>
                ))}
                {imageResponse &&
                  imageResponse.generated_images &&
                  imageResponse.generated_images.length
                  && imageResponse.generated_images.map((i) => (
                    <div className={`col-6 col-sm-12 col-md-6 mb-3`} key={i}>
                      <div
                        className={`${styles.imageHolderContainer} cursor-pointer`}
                        onClick={() => setImageForEnlargeViewMode(i)}
                      >
                        <img src={i} alt={i} />
                      </div>
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className="row">
                <div className={`col-12 mb-3`}>
                  {imageForEnlargeViewMode &&
                    imageEnlargeViewOption === "facebook" && (
                      <FBEnlarge image={imageForEnlargeViewMode} />
                    )}
                  {imageForEnlargeViewMode &&
                    imageEnlargeViewOption === "instagram" && (
                      <InstaEnlarge image={imageForEnlargeViewMode} />
                    )}
                  {imageForEnlargeViewMode &&
                    imageEnlargeViewOption === "pinterest" && (
                      <PintrestEnlarge image={imageForEnlargeViewMode} />
                    )}
                  {imageForEnlargeViewMode &&
                    imageEnlargeViewOption === "twitter" && (
                      <TwitterEnlarge image={imageForEnlargeViewMode} />
                    )}
                </div>
              </div>
            )}
            {imageForEnlargeViewMode && (
              <ActionShareIcons
                imageUrlForShare={imageForEnlargeViewMode}
              ></ActionShareIcons>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
