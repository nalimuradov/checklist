useEffect
 - fetching data or external services (handle success, failure, error)
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
 - jotai for contextless context
 - USAGE: add light/dark mode so that the prop is passed to all child components

testing:
 - storybook, jest

react profiler:
 - dev tools, analyze performance

NEXT TO DO (DEC 30):
 1) Connect to DB and store data per account so can access on login (cache?)
 2) Simplify scope of project
      - instead show monthly/yearly calendar and clicking on day opens component on side with key/values
 3) Conditionally show/hide those components