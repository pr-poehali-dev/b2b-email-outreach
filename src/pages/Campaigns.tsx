import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const campaigns = [
  {
    id: 1,
    name: "SaaS Founders Outreach Q1",
    status: "active",
    sent: 342,
    opened: 156,
    clicked: 89,
    replied: 28,
    openRate: 45.6,
    replyRate: 8.2,
    lastActivity: "2 часа назад",
    contacts: 500,
  },
  {
    id: 2,
    name: "Marketing Directors Follow-up",
    status: "paused",
    sent: 189,
    opened: 87,
    clicked: 42,
    replied: 12,
    openRate: 46.0,
    replyRate: 6.3,
    lastActivity: "5 часов назад",
    contacts: 250,
  },
  {
    id: 3,
    name: "Tech Leads - Product Demo",
    status: "active",
    sent: 521,
    opened: 234,
    clicked: 145,
    replied: 41,
    openRate: 44.9,
    replyRate: 7.9,
    lastActivity: "1 день назад",
    contacts: 650,
  },
  {
    id: 4,
    name: "Cold Leads Reactivation",
    status: "scheduled",
    sent: 0,
    opened: 0,
    clicked: 0,
    replied: 0,
    openRate: 0,
    replyRate: 0,
    lastActivity: "Запуск через 3 дня",
    contacts: 1200,
  },
  {
    id: 5,
    name: "Enterprise Sales - Discovery",
    status: "active",
    sent: 156,
    opened: 78,
    clicked: 34,
    replied: 19,
    openRate: 50.0,
    replyRate: 12.2,
    lastActivity: "4 часа назад",
    contacts: 180,
  },
  {
    id: 6,
    name: "Q4 Webinar Invites",
    status: "completed",
    sent: 890,
    opened: 412,
    clicked: 267,
    replied: 89,
    openRate: 46.3,
    replyRate: 10.0,
    lastActivity: "2 недели назад",
    contacts: 890,
  },
];

const Campaigns = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Кампании</h1>
            <p className="text-muted-foreground mt-1">
              Управление вашими email кампаниями
            </p>
          </div>
          <Button>
            <Icon name="Plus" className="mr-2 h-4 w-4" />
            Создать кампанию
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Icon name="Search" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск кампаний..."
              className="pl-9"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Icon name="Filter" className="mr-2 h-4 w-4" />
                Фильтр
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Все кампании</DropdownMenuItem>
              <DropdownMenuItem>Активные</DropdownMenuItem>
              <DropdownMenuItem>На паузе</DropdownMenuItem>
              <DropdownMenuItem>Запланированные</DropdownMenuItem>
              <DropdownMenuItem>Завершенные</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Все кампании</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Название</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-right">Контакты</TableHead>
                  <TableHead className="text-right">Отправлено</TableHead>
                  <TableHead className="text-right">Open Rate</TableHead>
                  <TableHead className="text-right">Reply Rate</TableHead>
                  <TableHead>Активность</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell>
                      <div>
                        <div className="font-medium">{campaign.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {campaign.sent > 0 
                            ? `${campaign.replied} ответов • ${campaign.clicked} кликов`
                            : 'Не запущена'
                          }
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          campaign.status === "active"
                            ? "default"
                            : campaign.status === "paused"
                            ? "secondary"
                            : campaign.status === "completed"
                            ? "outline"
                            : "outline"
                        }
                      >
                        {campaign.status === "active" && "Активна"}
                        {campaign.status === "paused" && "На паузе"}
                        {campaign.status === "scheduled" && "Запланирована"}
                        {campaign.status === "completed" && "Завершена"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{campaign.contacts}</TableCell>
                    <TableCell className="text-right">{campaign.sent}</TableCell>
                    <TableCell className="text-right">
                      {campaign.openRate > 0 ? `${campaign.openRate}%` : '—'}
                    </TableCell>
                    <TableCell className="text-right">
                      {campaign.replyRate > 0 ? `${campaign.replyRate}%` : '—'}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {campaign.lastActivity}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Icon name="MoreVertical" className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Icon name="Eye" className="mr-2 h-4 w-4" />
                            Посмотреть
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Icon name="Edit" className="mr-2 h-4 w-4" />
                            Редактировать
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Icon name="Copy" className="mr-2 h-4 w-4" />
                            Дублировать
                          </DropdownMenuItem>
                          {campaign.status === "active" && (
                            <DropdownMenuItem>
                              <Icon name="Pause" className="mr-2 h-4 w-4" />
                              Остановить
                            </DropdownMenuItem>
                          )}
                          {campaign.status === "paused" && (
                            <DropdownMenuItem>
                              <Icon name="Play" className="mr-2 h-4 w-4" />
                              Запустить
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-red-600">
                            <Icon name="Trash2" className="mr-2 h-4 w-4" />
                            Удалить
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Campaigns;
