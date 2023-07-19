import styled from "styled-components";
import { Plus_Jakarta_Sans } from "next/font/google";
import { VscCloudDownload } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { Colors, FileColors } from "../styles/index";

const Jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

type ButtonType = {
  backgroundColor: string;
};

export const VideoModalStyle = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: ${Colors.lighterBlue};
  }
`;

const Section = styled.div`
  display: flex;
  border-radius: 0.5rem;
  background: #fff;
  border-top: 0.4rem solid ${Colors.lighterBlue};
  background-color: white;
  flex-direction: column;
  color: ${Colors.default};
  width: 33%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1280px) {
    width: 70%;
    height: 90vh;
  }

  .close-btn {
    height: 1em;
    width: fit-content;
    position: relative;
    float: right;
    top: 1rem;
    right: 1rem;
  }
  .description {
    padding: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 0.5em;
      padding: 1em;
    }
  }
  main h2 {
    text-align: center;
    margin: 0 auto;
    padding: 1.5em;
    width: 70%;
    @media screen and (max-width: 768px) {
      font-size: 0.5em;
      padding: 2em 0;
    }
  }
  h3 {
    border-bottom: 0.1rem solid gray;
    padding-bottom: 0.5rem;
    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
  .downloads {
    justify-content: space-between;
  }

  .play iframe {
    border: none;
    width: 100%;
    margin: 0;
    @media screen and (min-width: 1280px) {
    }
  }
  p {
    @media screen and (min-width: 1280px) {
      font-size: 1rem;
    }
  }
`;
const Files = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: min-content;
  background-color: white;
  position: absolute;
  left: 0;
  bottom: 0;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

const DownloadButton = styled.button<ButtonType>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  display: inline-flex;
  height: 2.4rem;
  width: min-content;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  overflow: hidden;
  cursor: pointer;
  margin: 0.3rem 0.5rem 0.3rem 0;
  align-items: center;
  @media screen and (max-width: 1280px) {
    height: 1.85rem;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 768px) {
    height: 1.3rem;
    font-size: 0.5rem;
  }

  .cloud-icon {
    background-color: ${(props: ButtonType) => props.backgroundColor};
    width: 1.5em;
  }

  .cloud-icon,
  .file-name {
    display: inline-flex;
    align-items: center;
    padding: 0.65em;
    height: 100%;
    font-weight: 600;
  }
`;
export function VideoModal(props: any) {
  return (
    <VideoModalStyle className={Jakarta.className}>
      <Section>
        <div>
          <IoMdClose className="close-btn" onClick={props.close} />
        </div>
        <div>
          <main>
            <h2>
              <span>Webinar:</span>Como aumentar sua geração de Leads feat.
              Traktor
            </h2>
            <div className="play">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/U5cK0gVOz_Q"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </main>
          <div className="description">
            <h3>Descrição</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sed mauris in augue consectetur tristique. Aliquam ullamcorper,
              ante eget lobortis fringilla, nisi mauris placerat nulla, ac
            </p>
            <div className="downloads">
              <h3>Downloads</h3>

              <>
                <DownloadButton
                  className={Jakarta.className}
                  backgroundColor={FileColors.lightGreen}
                  style={{
                    color: `${FileColors.outlineGreen}`,
                  }}
                >
                  <VscCloudDownload
                    className="cloud-icon"
                    style={{
                      backgroundColor: `${FileColors.green}`,
                    }}
                  />
                  <div className="file-name">Spreadsheet.xls</div>
                </DownloadButton>
                <DownloadButton
                  className={Jakarta.className}
                  backgroundColor={FileColors.lightBlue}
                  style={{
                    color: `${FileColors.outlineBlue}`,
                  }}
                >
                  <VscCloudDownload
                    className="cloud-icon"
                    style={{
                      backgroundColor: `${FileColors.blue}`,
                    }}
                  />
                  <div className="file-name">Document.doc</div>
                </DownloadButton>
                <DownloadButton
                  className={Jakarta.className}
                  backgroundColor={FileColors.lightYellow}
                  style={{
                    color: `${FileColors.outlineYellow}`,
                  }}
                >
                  <VscCloudDownload
                    className="cloud-icon"
                    style={{
                      backgroundColor: `${FileColors.yellow}`,
                    }}
                  />
                  <div className="file-name">Presentation.ppt</div>
                </DownloadButton>
              </>
            </div>
          </div>
        </div>
      </Section>

      <Files>
        <DownloadButton
          className={Jakarta.className}
          backgroundColor={FileColors.lightGreen}
          style={{
            color: `${FileColors.outlineGreen}`,
          }}
        >
          <VscCloudDownload
            className="cloud-icon"
            style={{
              backgroundColor: `${FileColors.green}`,
            }}
          />
          <div className="file-name">Spreadsheet.xls</div>
        </DownloadButton>
        <DownloadButton
          className={Jakarta.className}
          backgroundColor={FileColors.lightBlue}
          style={{
            color: `${FileColors.outlineBlue}`,
          }}
        >
          <VscCloudDownload
            className="cloud-icon"
            style={{
              backgroundColor: `${FileColors.blue}`,
            }}
          />
          <div className="file-name">Document.doc</div>
        </DownloadButton>
        <DownloadButton
          className={Jakarta.className}
          backgroundColor={FileColors.lightYellow}
          style={{
            color: `${FileColors.outlineYellow}`,
          }}
        >
          <VscCloudDownload
            className="cloud-icon"
            style={{
              backgroundColor: `${FileColors.yellow}`,
            }}
          />
          <div className="file-name">Presentation.ppt</div>
        </DownloadButton>
        <DownloadButton
          className={Jakarta.className}
          backgroundColor={FileColors.lightGray}
          style={{
            color: `${FileColors.outlineGray}`,
          }}
        >
          <VscCloudDownload
            className="cloud-icon"
            style={{
              backgroundColor: `${FileColors.gray}`,
            }}
          />
          <div className="file-name">Folder.zip</div>
        </DownloadButton>
      </Files>
    </VideoModalStyle>
  );
}
