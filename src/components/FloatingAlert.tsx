import './FloatingAlert.css'

interface FloatingAlertProps {
  alert: boolean;
}

function FloatingAlert({ alert }: FloatingAlertProps) {
  return (
    <div className={`${alert ? 'notification-dot' : ''} absolute top-7 right-7 hover:brightness-50`}>
      <button>
        <img className="w-10 h-10" height={40} width={40} src='./notification.png'></img>
      </button>
    </div>
  )
}

export default FloatingAlert