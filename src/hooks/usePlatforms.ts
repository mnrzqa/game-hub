import platfroms from "../data/platfroms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platfroms, error: null });

export default usePlatforms;
