import styled from "styled-components";
import IoClose from "react-icons/io";

const VideoModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

const Files = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #fff;
`;

export function Modal() {
  return (
    <VideoModal>
      <Files></Files>
      <div>
        <h1>
          <>Webinar:</>Como aumentar sua geração de Leads feat. Traktor
        </h1>
        <></>
        <div>
          <h1>Descrição</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
            mauris in augue consectetur tristique. Aliquam ullamcorper, ante
            eget lobortis fringilla, nisi mauris placerat nulla, ac rhoncus orci
            ipsum eget elit. Sed interdum at tellus id pretium. Curabitur lectus
            urna, convallis efficitur maximus id, pulvinar id mauris. Etiam in
            ante nulla. Donec eget cursus risus. Maecenas non mi purus.
          </p>
          <h1>Downloads</h1>
        </div>
      </div>
    </VideoModal>
  );
}
