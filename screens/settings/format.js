import { getDocs,collection,deleteDoc ,doc} from 'firebase/firestore';
import db from "../../fbase"

function deleted(){
  const querySnapshot = getDocs(collection(db, "tmp"));
  querySnapshot.then((docs) => {
  docs.forEach(element => {
  var Id=element.id
  deleteDoc(doc(db, "tmp",Id))
  console.log(Id)
  });
});

querySnapshot.then((docs) => {
    docs.forEach(element => {
    var Id=element.id
    deleteDoc(doc(db, "tmp",Id))
    console.log(Id)
    });
  });

}
export default deleted()