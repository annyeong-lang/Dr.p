import { getDocs,collection,deleteDoc ,doc} from 'firebase/firestore';
import dbService from "../../fbase"

function deleted(){
  const querySnapshot = getDocs(collection(dbService, "tmp"));
  querySnapshot.then((docs) => {
  docs.forEach(element => {
  var Id=element.id
  deleteDoc(doc(dbService, "tmp",Id))
  console.log(Id)
  });
});

querySnapshot.then((docs) => {
    docs.forEach(element => {
    var Id=element.id
    deleteDoc(doc(dbService, "tmp",Id))
    console.log(Id)
    });
  });

}
export default deleted()