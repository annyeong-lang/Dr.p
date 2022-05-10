import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import dbService from "./fbase";
import { authService } from "./fbase";

function deleting(collection_name) {
  const querySnapshot = getDocs(collection(dbService, collection_name));
  querySnapshot.then((docs) => {
    docs.forEach((element) => {
      var Id = element.id;
      const docRef = doc(dbService, collection_name, Id);
      const docSnap = await getDocs(docRef);
      if(userId === docSnap.data().userId) {
        deleteDoc(doc(dbService, collection_name, Id));
        console.log(Id);
      }
    });
  });
}
function deleted(){
  useEffect(()=>{
    const userId = authService.currentUser.uid;
  }, []);

  deleting("result");
  deleting("todo");
}
export default deleted();