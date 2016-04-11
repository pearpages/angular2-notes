@Component({
    selector: 'story-characters',
    templateUrl: './app/characters.component.html',
    styleUrls: ['./app/characters.component.css'],
    directives: [CharacterDetailComponent],
    providers: [HTTP_PROVIDERS,CharacterService]
})
// Implements the lifecycle hook's interface OnInit
export class CharactersComponent implements OnInit {
    @Output() changed = new EventEmitter<Character>();
    @Input() storyId: number;
    characters: Character[];
    selectedCharacter: Character;

    constructor(private _characterService: CharacterService) {}

    // When the Component initializes, the ngOnInit function is executed
    ngOnInit() {
        this.characters = this._characterService.getCharacters(this.storyId);
    }

    select(selectedCharacter: Character) {
        this.selectedCharacter = selectedCharacter;
        this.changed.emit(selectedCharacter);
    }
}