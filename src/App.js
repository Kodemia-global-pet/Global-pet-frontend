import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CreateAccount from "./pages/CreateAccount";
import MyPetsPage from "./pages/MyPetsPage";
import PetDetailPage from "./pages/PetDetailPage";
import MyAccount from "./pages/MyAccount";
import FaqPage from "./pages/FaqPage";
import NewEventPage from "./pages/NewEventPage";
import PetEditPage from "./pages/PetEditPage";
import PetsNewPage from "./pages/PetsNewPage";
import NewRegisterPage from "./pages/NewRegisterPage";
import EditEventPage from "./pages/EditEventPage";
import ViewCardQrPage from "./pages/ViewCardQrPage";
import EditRegisterPage from "./pages/EditRegisterPage";
import NotFound from "./pages/NotFound";
import AttachmentsPage from "./pages/AttachmentsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/pets/new" element={<PetsNewPage />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/pets" element={<MyPetsPage />} />
      <Route path="/pets/:petID" element={<PetDetailPage />} />
      <Route path="/pets/:petID/edit" element={<PetEditPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/pets/:petID/new-event" element={<NewEventPage />} />
      <Route path="/pets/:petID/new-record" element={<NewRegisterPage />} />
      <Route path="/events/:eventID/edit" element={<EditEventPage />} />
      <Route path="/public/pets/:petID" element={<ViewCardQrPage />} />
      <Route path="/records/:eventID/edit" element={<EditRegisterPage />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/events/:eventID/attachments"
        element={<AttachmentsPage />}
      />
    </Routes>
  );
}

export default App;
