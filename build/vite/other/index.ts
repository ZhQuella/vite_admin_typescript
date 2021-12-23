

export const createCss = () => {
  return {
		preprocessorOptions: {
			scss: {
        additionalData: '@import "style/base/_var.scss";'
			}
		}
	}
}

export const createResolve = () => {
  return {
    alias: [
      {
        find: "@",
        replacement: "/src"
      },
      {
        find: "pages",
        replacement: "/src/pages"
      },
      {
        find: "components",
        replacement: "/src/components"
      },
      {
        find: "api",
        replacement: "/src/apis"
      },
      {
        find: "utils",
        replacement: "/src/utils"
      },
      {
        find: "hooks",
        replacement: "/src/hooks"
      },
      {
        find: "types",
        replacement: "/src/interfaces"
      },
      {
        find: "plugin",
        replacement: "/src/plugins"
      },
      {
        find: "style",
        replacement: "/src/styles"
      }
    ]
  }
}
