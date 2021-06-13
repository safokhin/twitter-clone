import React from 'react';
import PhotoIcon from "@material-ui/icons/InsertPhotoOutlined";
import { IconButton } from "@material-ui/core";
import {useHomeStyles} from "../pages/home/theme";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import {ImageObj} from "./AddTweetForm";

interface UploadImagesProps {
  images: ImageObj[];
  onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void;
}

export const UploadImages: React.FC<UploadImagesProps> = ({ images, onChangeImages }: UploadImagesProps): React.ReactElement => {
  const classes = useHomeStyles();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClickImage = () => {
    if(inputRef.current) {
      inputRef.current.click();
    }
  }

  const handleChangeFileInput = React.useCallback((event: Event) => {
    if(event.target) {
      const target = (event.target as HTMLInputElement);
      const file = target.files?.[0];
      if(file) {
        const fileObj = new Blob([file]);
        onChangeImages(images => [...images, {
          file,
          blobUrl: URL.createObjectURL(fileObj)
        }]);
      }
    }
  }, []);

  const removeImage = (url: string) => {
    onChangeImages(images => images.filter(obj => url !== obj.blobUrl));
  }

  React.useEffect(() => {
    if(inputRef.current) {
      inputRef.current.addEventListener('change', handleChangeFileInput)
    }

    return () => {
      if(inputRef.current) {
        inputRef.current.removeEventListener('change', handleChangeFileInput)
      }
    }
  }, [])

  return (
    <div>
      <IconButton onClick={handleClickImage}>
          <PhotoIcon/>
      </IconButton>
      <input ref={inputRef} type="file" hidden id='upload'/>
      <div className={classes.imagesList}>
        {images.map(obj =>
          <div key={obj.blobUrl} className={classes.imagesItem} style={{ backgroundImage: `url(${obj.blobUrl})` }}>
            <IconButton onClick={(): void => removeImage(obj.blobUrl)} className={classes.removeIcon}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  )
}
