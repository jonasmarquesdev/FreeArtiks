import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '4px',
  backgroundColor: 'var(--branco-default)'
});

const SearchInput = styled(TextField)({
  width: "500px",
  flex: 1,
  "& input": {
    padding: "8px",
    outline: "none",
    border: "none",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "transparent", // Remover a borda de baixo quando não está focado
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent", // Remover a borda quando não está focado
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--laranja)', // Cor da borda quando o input está focado
  },
});

const SearchIconWrapper = styled('div')({
  padding: '8px',
  color: '#888',
  cursor: 'pointer',
});

const SearchInputComponent = () => {
  return (
    <SearchContainer>
      <SearchInput
        placeholder="Search..."
        variant="outlined"
        fullWidth
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default SearchInputComponent;
