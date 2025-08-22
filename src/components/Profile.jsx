import profileImg from "../assets/hd.png";
import { LinkedInIcon } from "../data/data";
export function Profile() {
  return (
    <>
      <div className="realtive bg-profile-bg p-4 bg-center bg-cover mx-4 rounded-md my-4">
        <div className="flex justify-center sm:justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={profileImg}
              alt=""
              className="h-40 rounded-full border-2 border-yellow-500"
            />
            <div className="text-black">
              <h1 className="text-2xl md:text-3xl font-black">Shristi Shrivastava</h1>
              <a
                href="https://linktr.ee/Shristi_2310"
                className="text-xs sm:text-sm font-light text-[#800080] drop-shadow-[0_0_1px_#800080] underline"
                target="_blank"
              
              >
                @shristishrivastava_
              </a>
            </div>
          </div>
          {/* <a
          className="bg-bodyBg flex items-center p-2 gap-2 h-10 rounded-md text-sm md:text-sm max-sm:hidden hover:ring-2 hover:ring-primary mb-2"
          href="https://www.linkedin.com/in/shristi-shrivastava-969551251"
          target="_blank"
        >
          <span>{LinkedInIcon}</span>
          <span className="text-primary">LinkedIn</span>
        </a>
        <a
            className="bg-bodyBg flex items-center p-2 gap-2 h-10 rounded-md text-sm md:text-sm max-sm:hidden hover:ring-2 hover:ring-primary"
            href="https://github.com/shri2310sti"
            target="_blank"
          >
            <span>{LinkedInIcon}</span>
            <span className="text-primary">GitHub</span>
          </a> */}

<a
  className="bg-bodyBg flex items-center p-2 gap-2 h-10 rounded-md text-sm md:text-sm max-sm:hidden hover:ring-2 hover:ring-primary mb-2"
  href="https://www.linkedin.com/in/shristi-shrivastava-969551251"
  target="_blank"
>
  <span>{LinkedInIcon}</span>
  <span className="text-primary">LinkedIn</span>
</a>

<a
  className="bg-bodyBg flex items-center p-2 gap-2 h-10 rounded-md text-sm md:text-sm max-sm:hidden hover:ring-2 hover:ring-primary"
  href="https://github.com/shristi-29"  // Replace with your GitHub profile link
  target="_blank"
>
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5 text-primary"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.907-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.528 2.341 1.087 2.91.832.092-.646.349-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.985 1.03-2.683-.103-.253-.446-1.272.097-2.65 0 0 .84-.269 2.75 1.025A9.58 9.58 0 0 1 12 6.844c.851.004 1.706.114 2.505.335 1.91-1.294 2.749-1.025 2.749-1.025.544 1.378.201 2.397.098 2.65.641.698 1.03 1.591 1.03 2.683 0 3.843-2.339 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.418-.012 2.745 0 .268.18.579.688.481C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10Z"
        clipRule="evenodd"
      />
    </svg>
  </span>
  <span className="text-primary">GitHub</span>
</a>

        </div>
      </div>
    </>
  );
}