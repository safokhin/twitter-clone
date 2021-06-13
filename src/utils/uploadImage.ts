import { axios } from "../core/axios";

interface uploadImagesProps {
  height: number;
  size: number;
  url: string;
  width: number;
}

export const uploadImages = async (image: File): Promise<uploadImagesProps> => {
  console.log('upload')
  const formData = new FormData();
  formData.append("image", image);

  const { data } = await axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return data;
}
