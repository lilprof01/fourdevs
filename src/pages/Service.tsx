import { FAQ, Features } from "@/components/main"
import ActionSection from "@/components/UI/ActionSection"
import { useOutletContext } from "react-router-dom"

interface LayoutContext {
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Service = () => {
  const { setOpenNav } = useOutletContext<LayoutContext>();
  return (
    <main onClick={() => setOpenNav(false)}>
      <Features title="Check Our Previous Works" />
      <FAQ />
      <ActionSection />
    </main>
  )
}

export default Service
