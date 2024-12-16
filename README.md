useEffect
 - fetching data or external services
 - allows us to perform tasks after the component has already been added to the DOM or if a state/prop is changed
    - eg. [] runs once on mount, [state] runs whenever state changes
 - USAGE: fetch default values from text file on button press

suspense/lazy
 - lazy lets us load component only when it's rendered, not before
 - if we want to wait for item to load, we can use <Suspense> tag
 - USAGE: add loading screen to only home page, lazy load all components I make

memo
 - const MyComponent = memo(SomeComponent, arePropsEqual?)
 - let's us skip re-rendering components if props are unchanged for that component
 - otherwise, components will re-render if their parent re-renders
 - USAGE: memo load all components I make, also try useCallback() for performance

context
 - props are like parameters we pass through components
 - what if we wanted to pass a prop many layers down
 - that component can then use the context: const theme = useContext(themeContext)
 - USAGE: add light/dark mode so that the prop is passed to all child components

useActionState
 - hook that updates when form submitted
 - USAGE: add login form at header, routes you to other page, then returns back to original page with name at top right

cache:
 - USAGE: save added dates through reloads

react profiler:
 - dev tools, analyze performance

more todo:
 - conditionally show/hide components (show hide header)
 - testing with jest/storybook