import { Admin, Resource } from 'react-admin'
import UploadPictureDataProvider from "./components/UploadPictureDataProvider";
import CategoryIcon from '@mui/icons-material/Category';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import CategoryList from "./components/category/CategoryList";
import CategoryCreate from "./components/category/CategoryCreate";
import CategoryEdit from "./components/category/CategoryEdit";
import RequestList from "./components/request/RequestList";
import RequestCreate from "./components/request/RequestCreate";
import RequestEdit from "./components/request/RequestEdit";
import ResponseList from "./components/response/ResponseList";
import ResponseEdit from "./components/response/ResponseEdit";
import RequestShow from "./components/request/RequestShow";

function App() {
    return (
        <div style={{width: '80%'}}>
        <Admin dataProvider={UploadPictureDataProvider}>
            <Resource
                name='categories' icon={CategoryIcon}
                list={CategoryList}
                create={CategoryCreate}
                edit={CategoryEdit}
            />
            <Resource
                name='requests' icon={TextSnippetIcon}
                list={RequestList}
                create={RequestCreate}
                edit={RequestEdit}
                show={RequestShow}
            />
            <Resource
                name='responses' icon={QuestionAnswerIcon}
                list={ResponseList}
                edit={ResponseEdit}
            />
        </Admin>
        </div>
    );
}

export default App;
