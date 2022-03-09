import { getDocs,collection,deleteDoc ,doc} from 'firebase/firestore';
import dbService from "../../fbase"

function deleting(collection_name){
  const querySnapshot = getDocs(collection(dbService, collection_name));
  querySnapshot.then((docs) => {
  docs.forEach(element => {
  var Id=element.id
  deleteDoc(doc(dbService, collection_name,Id))
  console.log(Id)
  });
});

querySnapshot.then((docs) => {
    docs.forEach(element => {
    var Id=element.id
    deleteDoc(doc(dbService, collection_name,Id))
    console.log(Id)
    });
  });
}
function deleted(){
  deleting("acne")
  deleting("care")
  deleting("carelist")
  deleting("result")
  deleting("todo")
}
export default deleted()