import { Map, MapControls } from '@/common/ui/map'
import { Card } from '@/common/ui/card'

const GISMap = () => {
  return (
    <Card className='h-full p-0 overflow-hidden'>
      <Map center={[122.07, 6.92]} zoom={11} theme='light' >
        <MapControls position='bottom-left' showFullscreen={true} />
      </Map>
    </Card>
  )
}

export default GISMap