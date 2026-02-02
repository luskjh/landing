"use client";

import { useState, useEffect, useCallback, MouseEventHandler } from "react";
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  PlayIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { createHighlighterCoreSync } from "shiki";
import go from "@shikijs/langs/go";
import everforestDark from "@shikijs/themes/everforest-dark";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

const shiki = createHighlighterCoreSync({
  themes: [everforestDark],
  langs: [go],
  engine: createJavaScriptRegexEngine(),
});

const code = `if cached, ok := r.cache.Load(key); ok {
    return cached.(*template.Template).ExecuteTemplate(w, "layout/"+layout+".html", data)
}

t, err := r.partials.Clone()
if err != nil {
    return fmt.Errorf("error cloning template: %w", err)
}
paths := []string{"layout/" + layout + ".html", "page/" + page + ".html"}
for _, path := range paths {
    bytes, err := fs.ReadFile(r.fsys, path)
    if err != nil {
        return fmt.Errorf("error reading %s: %w", path, err)
		}

		_, err = t.New(path).Parse(string(bytes))
`;

const html = shiki.codeToHtml(code, {
  lang: "go",
  theme: "everforest-dark",
  transformers: [
    {
      line(node, line) {
        if (line === 7) {
          this.addClassToHast(node, "highlighted-line");
        }
      },
    },
  ],
});

const options = [
  "Branch state can't be produced",
  "Not enough time",
  "Other reason",
];

// YouTube video ID - replace with your actual video
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

function VideoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
}) {
  const handleKeyDown = useCallback(
    e => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-5xl px-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-4 flex items-center gap-2 text-white/70 transition-colors hover:text-white"
        >
          <span className="text-sm font-medium">Close</span>
          <XMarkIcon className="size-6" />
        </button>

        {/* Video Container with 16:9 Aspect Ratio */}
        <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Optional: Video Title */}
        <p className="mt-4 text-center text-sm text-white/50">
          Press{" "}
          <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">
            Esc
          </kbd>{" "}
          to close
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState(
    "Branch state can't be produced",
  );
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleSelect = value => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleApply = () => {
    setIsVideoModalOpen(true);
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="dark:bg-everforest-900 min-h-screen bg-white">
      <style>{`
        .highlighted-line {
          background-color: rgba(255, 255, 255, 0.1);
          display: block;
          margin: 0 -1.5rem;
          padding: 0 1.5rem;
        }
      `}</style>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} />

      <div className="from-everforest-100/20 dark:from-everforest-950/10 relative isolate flex min-h-screen items-center overflow-hidden bg-linear-to-b">
        <div className="mx-auto h-full max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-7 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="h-full px-6 lg:col-span-4 lg:px-0 lg:pt-4">
            <div className="mx-auto h-full max-w-2xl">
              <div className="flex h-full max-w-xl flex-col">
                <div className="text-4xl font-semibold">🌾 Midharvest</div>
                <div className="flex flex-1 items-center">
                  <div>
                    <div className="mt-4 lg:mt-0">
                      <a href="#" className="inline-flex space-x-6">
                        <span className="bg-everforest-50 text-everforest-600 ring-everforest-600/20 dark:bg-everforest-500/10 dark:text-everforest-400 dark:ring-everforest-500/25 rounded-full px-3 py-1 text-sm/6 font-semibold ring-1 ring-inset">
                          What's new
                        </span>
                        <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600 dark:text-gray-300">
                          <span>Just shipped v0.1</span>
                          <ChevronRightIcon
                            aria-hidden="true"
                            className="size-5 text-gray-400 dark:text-gray-500"
                          />
                        </span>
                      </a>
                    </div>
                    <h1 className="mt-10 text-6xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
                      Grow better code
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                      Boost your confidence with collaborative testing
                      governance.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <button
                        onClick={openVideoModal}
                        className="bg-everforest-600 hover:bg-everforest-500 focus-visible:outline-everforest-600 dark:bg-everforest-500 dark:hover:bg-everforest-400 dark:focus-visible:outline-everforest-500 flex gap-x-1 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        <PlayIcon className="size-5" /> <div>Watch Video</div>
                      </button>
                      <a
                        href="//github.com/marketplace"
                        className="text-sm/6 font-semibold text-gray-900 dark:text-white"
                      >
                        View on GitHub <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:col-span-3 lg:mx-0 lg:mt-0">
            <div
              aria-hidden="true"
              className="shadow-everforest-600/10 ring-everforest-50 dark:shadow-everforest-400/10 absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 md:-mr-20 lg:-mr-36 dark:bg-gray-800/30 dark:ring-white/5"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-everforest-600 [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
                <div
                  aria-hidden="true"
                  className="bg-everforest-100 absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] opacity-20 inset-ring inset-ring-white md:ml-20 lg:ml-36"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="relative w-full overflow-hidden rounded-tl-xl bg-gray-900">
                      {/* Line Editor Dialogue Modal */}
                      <div className="absolute top-57 left-1/2 z-20 -translate-x-1/2 transform">
                        <div className="w-72 rounded-lg border border-gray-600 bg-gray-800 shadow-2xl">
                          {/* Modal Header */}
                          <div className="flex items-center justify-between border-b border-gray-700 px-3 py-2">
                            <span className="text-xs font-medium text-gray-300">
                              Edit line 58
                            </span>
                            <button className="text-gray-400">
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                          {/* Modal Body */}
                          <div className="p-3">
                            <label className="mb-1.5 block text-xs font-medium text-gray-400">
                              Select option
                            </label>
                            {/* Functional Select Box */}
                            <div className="relative">
                              <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex w-full cursor-pointer items-center justify-between rounded-md border border-gray-600 bg-gray-700 px-3 py-1.5 text-sm text-white"
                              >
                                <span>{selectedValue}</span>
                                <ChevronUpDownIcon className="h-4 w-4 text-gray-400" />
                              </div>
                              {/* Dropdown */}
                              {isOpen && (
                                <div className="absolute top-full right-0 left-0 z-10 mt-1 rounded-md border border-gray-600 bg-gray-700 py-1 shadow-lg">
                                  {options.map(option => (
                                    <div
                                      key={option}
                                      onClick={() => handleSelect(option)}
                                      className={`flex cursor-pointer items-center px-3 py-1.5 text-sm ${
                                        selectedValue === option
                                          ? "bg-blue-600 text-white"
                                          : "text-gray-200 hover:bg-gray-600"
                                      }`}
                                    >
                                      {selectedValue === option ? (
                                        <svg
                                          className="mr-2 h-4 w-4"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      ) : (
                                        <span className="mr-2 h-4 w-4" />
                                      )}
                                      {option}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                          {/* Modal Footer */}
                          <div className="flex justify-end gap-2 border-t border-gray-700 px-3 py-2">
                            <button
                              onClick={handleApply}
                              className="rounded-md bg-green-600 px-3 py-1 text-xs font-medium text-white hover:bg-green-500"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                          <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                            template.go
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            serve.go
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-everforest-950 px-6 py-6"
                        dangerouslySetInnerHTML={{ __html: html }}
                      ></div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl dark:ring-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32 dark:from-gray-900" />
      </div>
    </div>
  );
}
