import {Hello} from './Hello';

class App extends React.Component {
  render() {
    const users = [
        {_id: 1, name: "Leia"},
        {_id: 2, name: "Luke"},
        {_id: 3, name:"Han"}
    ];

    return (
      <div>{
        users.map(function(user){
          return <Hello key={user._id} name={user.name} />;
        })
      }
      </div>
    );
  }
}
