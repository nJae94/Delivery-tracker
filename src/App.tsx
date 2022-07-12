import styled from '@emotion/styled';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Wrapper>
        <Router />
      </Wrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

const Wrapper = styled.main`
  display: flex;
  height: 100%;
  justify-content: center;
`;
