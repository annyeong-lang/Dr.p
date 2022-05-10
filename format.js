import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { dbService, authService } from "./fbase";

function deleting(collection_name, userId) {
  const querySnapshot = getDocs(collection(dbService, collection_name));
  querySnapshot.then((docs) => {
    docs.forEach(async (element) => {
      var Id = element.id;
      const docRef = doc(dbService, collection_name, Id);
      const docSnap = await getDocs(docRef);
      if (userId === docSnap.data().userId) {
        deleteDoc(doc(dbService, collection_name, Id));
        console.log(Id);
      }
    });
  });
}
function deleted() {
  const userId = authService.currentUser.uid;
  deleting("result", userId);
  deleting("todo", userId);
}
export default deleted();
