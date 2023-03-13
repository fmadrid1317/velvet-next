import Card from '@/components/cards/Card';
import DefaultLayout from '@/components/layouts/DefaultLayout';

function InitialPage() {
  return (
    <DefaultLayout>
      <div className=''>
        <Card title="Whiskey Sour" description="Some description"/>
      </div>
    </DefaultLayout>
  );
}

export default InitialPage;
