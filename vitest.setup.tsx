import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Router Mock
vi.mock("next/router", () => ({
  useRouter: vi.fn().mockReturnValue({
    pathname: "/",
    query: { language: "javascript" },
  }),
}));

// next/image Mock
vi.mock("next/image", () => {
  return {
    __esModule: true,
    // eslint-disable-next-line
    default: (props: any) => <img {...props} />,
  };
});
