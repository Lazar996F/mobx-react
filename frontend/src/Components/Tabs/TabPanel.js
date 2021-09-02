import styled from 'styled-components';

const Box = styled.div`
  padding-top: 5px;
  padding-left: 15px;
  background-color: ${props => props['styleState']==='create-privacy' ? '#ffff' : '#F2F2F2'};
  border: ${props => props['stylestate']==='create-privacy' ? '1px solid #C7C7C7' : 0};
  padding-right: ${props => props['stylestate']=== 'create-privacy' && '15px'};
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={ value !== index }
      aria-labelledby={ `simple-tab-${ index }` }
      { ...other }
    >
      { value === index && (
        <Box stylestate={props.stylestate}>
         { children }
        </Box>
      ) }
    </div>
  );
}

export default TabPanel;
