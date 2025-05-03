import { FAQ, Features } from "@/components/main"
import { ScrollToTop } from "@/components/UI"
import ActionSection from "@/components/UI/ActionSection"
import { useOutletContext } from "react-router-dom"

interface LayoutContext {
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Service = () => {
  const { setOpenNav } = useOutletContext<LayoutContext>();
  return (
    <main onClick={() => setOpenNav(false)}>
      <ScrollToTop />
      <Features title="Check Our Previous Works" />
      <FAQ />
      <ActionSection />
    </main>
  )
}

export default Service
