import { FiArrowRight } from 'react-icons/fi';

export function TagFeature() {
  return (
    <div className="inline-flex items-center gap-3 p-1 pr-[10px] bg-brand-50 rounded-2xl">
      <span className="bg-white inline-block h-6 px-[10px] rounded-2xl text-sm/5 font-medium text-brand-700 border border-solid border-brand-200">
        New feature
      </span>
      <a
        href="#"
        className="flex items-center gap-1 text-sm/6 font-medium text-brand-700 hover:opacity-50 transition-opacity"
      >
        Check out the team dashboard <FiArrowRight />
      </a>
    </div>
  );
}
