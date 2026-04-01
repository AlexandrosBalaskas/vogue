import { CookieModal } from "./components/CookieModal";
import { FakeVerification } from "./components/FakeVerification";
import { VogueArticle } from "./components/VogueArticle";

export default function HomePage() {
  return (
    <FakeVerification>
      <VogueArticle />
      <CookieModal />
    </FakeVerification>
  );
}
