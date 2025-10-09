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

const stats = [
  {
    title: "Активные кампании",
    value: "12",
    change: "+3",
    trend: "up",
    icon: "Mail",
  },
  {
    title: "Отправлено писем",
    value: "2,847",
    change: "+412",
    trend: "up",
    icon: "Send",
  },
  {
    title: "Open Rate",
    value: "42.3%",
    change: "+2.1%",
    trend: "up",
    icon: "Eye",
  },
  {
    title: "Response Rate",
    value: "8.7%",
    change: "-0.4%",
    trend: "down",
    icon: "MessageSquare",
  },
];

const recentCampaigns = [
  {
    id: 1,
    name: "SaaS Founders Outreach Q1",
    status: "active",
    sent: 342,
    opened: 156,
    replied: 28,
    lastActivity: "2 часа назад",
  },
  {
    id: 2,
    name: "Marketing Directors Follow-up",
    status: "paused",
    sent: 189,
    opened: 87,
    replied: 12,
    lastActivity: "5 часов назад",
  },
  {
    id: 3,
    name: "Tech Leads - Product Demo",
    status: "active",
    sent: 521,
    opened: 234,
    replied: 41,
    lastActivity: "1 день назад",
  },
  {
    id: 4,
    name: "Cold Leads Reactivation",
    status: "scheduled",
    sent: 0,
    opened: 0,
    replied: 0,
    lastActivity: "Запуск через 3 дня",
  },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Дашборд</h1>
            <p className="text-muted-foreground mt-1">
              Обзор ваших email кампаний
            </p>
          </div>
          <Button>
            <Icon name="Plus" className="mr-2 h-4 w-4" />
            Новая кампания
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name={stat.icon} className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs mt-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} за неделю
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Последние кампании</CardTitle>
                <Button variant="ghost" size="sm">
                  Все кампании
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Название</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead className="text-right">Отправлено</TableHead>
                    <TableHead className="text-right">Открыто</TableHead>
                    <TableHead className="text-right">Ответов</TableHead>
                    <TableHead>Активность</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            campaign.status === "active"
                              ? "default"
                              : campaign.status === "paused"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {campaign.status === "active" && "Активна"}
                          {campaign.status === "paused" && "На паузе"}
                          {campaign.status === "scheduled" && "Запланирована"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{campaign.sent}</TableCell>
                      <TableCell className="text-right">{campaign.opened}</TableCell>
                      <TableCell className="text-right">{campaign.replied}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {campaign.lastActivity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Быстрые действия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline">
                  <Icon name="Plus" className="mr-2 h-4 w-4" />
                  Создать кампанию
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Icon name="Upload" className="mr-2 h-4 w-4" />
                  Импорт контактов
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Icon name="FileText" className="mr-2 h-4 w-4" />
                  Новый шаблон
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Icon name="BarChart3" className="mr-2 h-4 w-4" />
                  Отчет по аналитике
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Последняя активность</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Новый ответ</p>
                    <p className="text-xs text-muted-foreground truncate">
                      john@startup.com ответил на кампанию
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">5 мин назад</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="Eye" className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Письмо открыто</p>
                    <p className="text-xs text-muted-foreground truncate">
                      sarah@company.io открыла письмо
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">12 мин назад</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="Send" className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Отправлено писем: 24</p>
                    <p className="text-xs text-muted-foreground truncate">
                      Кампания "SaaS Founders Q1"
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">1 час назад</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
