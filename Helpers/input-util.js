import { db, storage } from '../firebase';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from '@firebase/firestore';
import { getDownloadURL, ref, uploadString } from '@firebase/storage';

export const sendPost = async (
  loading,
  setLoading,
  selectedFile,
  setSelectedFile,
  input,
  setInput,
  setShowEmojis,
  session
) => {
  if (loading) return;
  setLoading(true);

  const docRef = await addDoc(collection(db, 'posts'), {
    id: session.user.uid,
    username: session.user.name,
    userImg: session.user.image,
    tag: session.user.tag,
    text: input,
    timestamp: serverTimestamp(),
  });

  const imageRef = ref(storage, `posts/${docRef.id}/image`);

  if (selectedFile) {
    await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(db, 'posts', docRef.id), {
        image: downloadURL,
      });
    });
  }

  setLoading(false);
  setInput('');
  setSelectedFile(null);
  setShowEmojis(false);
};

export const addImageToPost = (e, setSelectedFile) => {
  const reader = new FileReader();
  if (e.target.files[0]) {
    reader.readAsDataURL(e.target.files[0]);
  }
  reader.onload = (readerEvent) => {
    setSelectedFile(readerEvent.target.result);
  };
};

export const addEmoji = (e, setInput, input) => {
  let sym = e.unified.split('-');
  let codesArray = [];
  sym.forEach((el) => codesArray.push('0x' + el));
  let emoji = String.fromCodePoint(...codesArray);
  setInput(input + emoji);
};
