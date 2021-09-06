import H1 from '../../Components/H1';
import H2 from '../../Components/H2';


function PageHeader({ title, subtitle }) {
  return (
    <div className="padding-left-15">
      <H1>{ title }</H1>
      <H2 secondary>{ subtitle }</H2>
    </div>
  )
}

export default PageHeader;
